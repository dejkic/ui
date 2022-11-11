/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { request } from 'common/helpers/request';
import { useQuery } from 'react-query';
import { endpoint } from '../helpers';
import { Subscription } from 'common/interfaces/subscription';
import { route } from 'common/helpers/route';

export function useBlankSubscriptionQuery() {
  return useQuery<Subscription>(
    '/api/v1/subscriptions/create',
    () =>
      request('GET', endpoint('/api/v1/subscriptions/create')).then(
        (response) => response.data.data
      ),
    { staleTime: Infinity }
  );
}

export function useSubscriptionQuery(params: { id: string | undefined }) {
  return useQuery<Subscription>(
    route('/api/v1/subscriptions/:id', { id: params.id }),
    () =>
      request('GET', endpoint('/api/v1/subscriptions/:id', { id: params.id })).then(
        (response) => response.data.data
      ),
    { staleTime: Infinity }
  );
}