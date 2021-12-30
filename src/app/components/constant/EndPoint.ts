export default class EndPoint {
  public static BASE = 'http://localhost:8080';
  public static PRODUTO = EndPoint.BASE + '/produto';
  public static ESTOQUE = EndPoint.BASE + '/estoque';
  public static CATEGORIA = EndPoint.BASE + '/categoria';

  public static TIPO_PRODUTO = EndPoint.PRODUTO + '/tipo';
}
