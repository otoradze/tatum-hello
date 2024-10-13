import { Network, TatumSDK, Ethereum } from '@tatumio/tatum';
import { toast } from 'react-toastify';
import { create } from 'zustand';
import { TATUM_API_KEY } from '@shared/configs/api/';

type StoreState = {
  data: string;
  isLoading: boolean;
  dataErrorMessage: string;
};

type StoreActions = {
  getData: (inputValue: string) => Promise<void>;
};

export const useGetData = create<StoreState & StoreActions>((set) => ({
  data: '',
  isLoading: false,
  dataErrorMessage: '',

  getData: async (inputValue: string) => {
    set({ isLoading: true, dataErrorMessage: '' });
    try {
      const tatum = await TatumSDK.init<Ethereum>({
        network: Network.ETHEREUM,
        apiKey: { v4: TATUM_API_KEY },
        verbose: true,
      });

      const balance = await tatum.address.getBalance({
        addresses: [inputValue],
      });
      const balanceData = balance.data.find((asset) => asset.asset === 'ETH');

      set({
        isLoading: false,
        data: balanceData.balance,
        dataErrorMessage: '',
      });
      toast.success('Eth balance fetched successfuly');
    } catch (error: any) {
      console.error('Error fetching data:', error);
      toast.error('Could not fetch Eth balance');
      set({
        data: '',
        isLoading: false,
        dataErrorMessage:
          error.message || 'An error occurred while fetching data',
      });
    }
  },
}));
