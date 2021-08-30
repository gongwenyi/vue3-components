import DefaultTheme from 'vitepress/theme'
import Button from './../../../src/components/Button'
// import { install } from '../../../src/mainDoc.ts'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.component(Button.name, Button)
    // install(app)
  }
}