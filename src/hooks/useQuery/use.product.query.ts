import {useEffect, useState} from 'react';
import {getProduct} from '../../api';
export enum Price {
  'COST' = 'Cost Effective',
  'BIT' = 'Bit Pricer',
  'BI' = 'Bi Spender',
}

export const useProduct = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const fetchProduct = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await getProduct('search?location=san jose&limit=50');
      const map_data: any = {
        [Price.COST]: [],
        [Price.BIT]: [],
        [Price.BI]: [],
      };

      res?.businesses?.forEach((item: any) => {
        if (item.price === '$') {
          map_data[Price.COST].push(item);
        } else if (item.price === '$$') {
          map_data[Price.BIT].push(item);
        } else if (item.price === '$$$') {
          map_data[Price.BI].push(item);
        }
      });

      setData(map_data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  const onRefresh = () => {
    fetchProduct();
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return {
    data: data,
    isLoading: isLoading,
    error: isError,
    onRefresh: onRefresh,
  };
};

export const useProductById = ({id}) => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const fetchProduct = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await getProduct(`/${id}`);

      setData(res);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return {
    data: data,
    isLoading: isLoading,
    error: isError,
  };
};
