import { Stock, Handler, HTTP } from '@brixtol/types';
import { db, q } from '@brixtol/fauna';
import { Status, Lambda } from 'lambda';

/**
 * Centra POST Request
 */
export interface GET extends HTTP {
  params: {
    status: Stock.Status[];
    season: Stock.SeasonIDs | Lowercase<Stock.SeasonIDs>;
    sku: string[];
    limit: number;
  }
}

/**
 * Stock List
 *
 * Returns stocklist of entries in the Fauna database. Accepts
 * various query parameters for filtering of stock items.
 */
export const handler = Lambda<Handler.Lambda>({
  GET: {
    route: '/stock',
    http: {
      authorize: true,
      parseParams: {
        status: [
          'tracking',
          'untracked',
          'duplicate',
          'uncategorized',
          'missing',
          'unmapped'
        ],
        season: String,
        sku: String,
        limit: Number,
        number: 1239,
        boo: false
      }
    },
    async handle (request: GET) {

      const filter = [];

      if (request.params.season) {
        filter.push([
          [ 'data', 'season' ],
          [ request.params.season.toUpperCase() ]
        ]);
      }

      if (request.params.sku) {
        filter.push([
          [ 'data', 'sku' ],
          [ request.params.sku ]
        ]);
      }

      if (request.params.status) {
        filter.push([
          [ 'data', 'status' ],
          [ request.params.status ]
        ]);
      }

      try {

        const data = await db.query(q.Call('GetFilteredList', {
          index: 'stock',
          size: request.params.limit || 3000,
          filter,
          after: []
        }));

        return this.success(data);

      } catch (e) {

        return this.error(Status.Invalid, 'Unable to get stock', e);

      }
    }

  }

});
