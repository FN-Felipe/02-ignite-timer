import 'styled-components' // esse é um arquivo para apenas definir, é um arquivo de difinição
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme // se passar o mouse por cima da importação defaultTheme, ele me mostra os meus atributs. Aqui posso colocá-los numa variável com o typeof

// o declare declara os tipos, tipagem, do meu styled-components. Qualquer arquivo que eu importar o styled-components, ele vai puxar daqui da minha declare as tipagens. Como não quero criar do zero, eu importo aqui também o styled-components
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
