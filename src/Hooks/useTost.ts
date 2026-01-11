import { useMemo } from "react";
import { toast } from "react-hot-toast";

export type ToastType = "success" | "error" | "info" | "warning";

export function useAppToast() {
  return useMemo(() => ({
    success: (msg: string) => toast.success(msg),
    error: (msg: string) => toast.error(msg),
    info: (msg: string) => toast(msg),
    warning: (msg: string) => toast(msg),
  }), []);
}
