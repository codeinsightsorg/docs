import { create } from "zustand";
import axios from "axios";
interface AnalyzeResultState {
  charts: any[];
  isLoading: boolean;
  getAnalyzeResults: (query: string) => Promise<void>;
}
export const useAnalyzeResultsStore = create<AnalyzeResultState>((set) => ({
  charts: null,
  isLoading: false,
  getAnalyzeResults: async (url) => {
    set({ isLoading: true });
    const response = await axios.get<any>(`/api/data`, {
      params: {
        url: `${url}`.replace(/\.git$/, ""),
      },
    });
    const chartData = response.data.results
      .find((item) => item.plugin.plugin.name === "ChartJSPlugin")
      .allPluginsData.filter((response) => {
        return !!Object.keys(response.charts).length;
      });
    set({ charts: chartData, isLoading: false });
  },
}));
