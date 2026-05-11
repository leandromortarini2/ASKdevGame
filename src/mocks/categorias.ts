export interface ICategorias {
  id: number;
  color: string;
  text: string;
  categoria: string;
}
export const categorias = [
  {
    id: 0,
    color: "bg-[#E8E628]",
    text: "text-gray-600",
    categoria: "JavaScript",
  },
  {
    id: 1,
    color: "bg-[#00A552]",
    text: "text-white",
    categoria: "Diseño",
  },
  {
    id: 2,
    color: "bg-[#8C6DB0]",
    text: "text-white",
    categoria: "zustand",
  },
  {
    id: 3,
    color: "bg-[#00AEEF]",
    text: "text-white",
    categoria: "Tanstack Query",
  },
  {
    id: 4,
    color: "bg-[#EE3E52]",
    text: "text-white",
    categoria: "Axios",
  },
  {
    id: 5,
    color: "bg-[#FFC107]",
    text: "text-white",
    categoria: "PHP",
  },
];
