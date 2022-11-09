import { RequestAtivarParams, RequestLogin, RequestPedirAtivacao } from "./types";

import axiosInstance from "services/axios";

export async function requestLogin(params: RequestLogin) {
  const response = await axiosInstance.post("/login", { ...params });
  return response.data;
}

export async function requestPedirAtivacao(params: RequestPedirAtivacao) {
  const response = await axiosInstance.post("/usuarios/pedirAtivacao", { ...params });
  return response.data;
}

export async function requestAtivar(params: RequestAtivarParams) {
  const response = await axiosInstance.post("/usuarios/ativar", { ...params });
  return response.data;
}

export async function requestCriarSenha(params: RequestAtivarParams) {
  const response = await axiosInstance.post("/usuarios/criarSenha", { ...params });
  return response.data;
}
