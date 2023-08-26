import { Store } from "../core/core";

interface State {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}

export default new Store<State>({
  photo: 'https://heropy.blog/css/images/logo.png',
  name: 'Jina Jung',
  email: 'jjina810@gmail.com',
  blog: 'https://velog.io/@jinajung',
  github: 'https://github.com/jinajung810',
  repository: 'https://github.com/jinajung810/vanillajs-movie-app'
})