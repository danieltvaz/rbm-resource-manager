export type RequestLogin = {
  login: string;
  senha: string;
};

export type RequestPedirAtivacao = {
  login: string;
};

export type RequestAtivarParams = {
  login: string;
  token: string;
};

export type RequestCriarSenhaParams = {
  login: string;
  senha: string;
};
