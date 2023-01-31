import { Feed } from './components/Feed'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Comment } from './components/Comment'

import styles from './App.module.css'

import './global.css'

// props = { author=", content="}

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Feed author="Russo" content="Curti muito" />
          <Feed author="Fernandes" content="Viajei ontem" />
        </main>
      </div>
    </div>

  )
}

export default App
