import { useState } from "react";
import { Saldo } from "../models/Saldo";

export const useSaldoViewModel = () => {
  const [saldo, setSaldo] = useState<Saldo>({
    total: 30,
    movimentos: [
      { valor: 10, data: "25/10/2025" },
      { valor: 10, data: "15/10/2025" },
      { valor: 10, data: "08/10/2025" },
    ],
  });

  return { saldo, setSaldo };
};
