import { Feed } from './components/Feed'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Comment } from './components/Comment'

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/jonrusso.png',
      name: 'John Russo',
      role: 'Software Developer'
    },
    content: [
      { type: 'paragraph', content: 'Howdy everyone! 👋', },
      { type: 'paragraph', content: 'I just uploaded another project to my portfolio. It is a project I did at the NLW Return, it is an event on Rocketseat.The name of the project is DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-02-02 20:40:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/Thomas.png',
      name: 'Thomas',
      role: 'Software Engineer @Google'
    },
    content: [
      { type: 'paragraph', content: 'Howdy everyone! 👋', },
      { type: 'paragraph', content: 'I just uploaded another project to my portfolio. It is a project I did at the NLW Return, it is an event on Rocketseat.The name of the project is DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-02-04 20:00:00'),
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Feed
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>

  )
}

export default App
