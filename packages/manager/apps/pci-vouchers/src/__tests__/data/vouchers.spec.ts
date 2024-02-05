import { describe, expect, vi } from 'vitest';
import { fetchIcebergV6 } from '@ovh-ux/manager-core-api';
import { getAllVouchers, paginateResults } from '@/data/vouchers';

vi.mock('@ovh-ux/manager-core-api', () => {
  const mock = vi.fn(() => {
    return Promise.resolve({ data: {} });
  });
  return {
    fetchIcebergV6: mock,
  };
});

function voucherList(count: number) {
  return new Array(count).map((i) => ({
    id: i,
    bill: `bill-${i}`,
    products: `product-${i}`,
    description: `description-${i}`,
    voucher: `voucher-${i}`,
    validity: { from: '', to: '' },
    total_credit: { text: '', value: 0, currencyCode: '' },
    available_credit: { text: '', value: 0, currencyCode: '' },
    used_credit: { text: '', value: 0, currencyCode: '' },
  }));
}

describe('vouchers data', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  it('should call credit api to list vouchers', async () => {
    expect(fetchIcebergV6).not.toHaveBeenCalled();
    getAllVouchers('123');
    expect(fetchIcebergV6).toHaveBeenCalledWith({
      route: `/cloud/project/123/credit`,
    });
  });
  it('should paginate results', async () => {
    expect(
      paginateResults(voucherList(11), {
        page: 0,
        pageSize: 5,
      }).pageCount,
    ).toBe(3);
    expect(
      paginateResults(voucherList(11), {
        page: 9,
        pageSize: 5,
      }).rows.length,
    ).toBe(0);
    expect(
      paginateResults(voucherList(11), {
        page: 2,
        pageSize: 5,
      }).rows.length,
    ).toBe(1);
    expect(
      paginateResults(voucherList(17), {
        page: 0,
        pageSize: 3,
      }).rows.length,
    ).toBe(3);
    expect(
      paginateResults(voucherList(11), {
        page: 1,
        pageSize: 5,
      }).rows.length,
    ).toBe(5);
  });
});
