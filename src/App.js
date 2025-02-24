import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
// import ListPage from './pages/ListPage/index'
// import ViewPage from './pages/ViewPage/index'

// 동적 import - Promise 형태로 반환되기 때문에 lazy로 감싸주고 Suspense 내에서 사용
const ListPage = lazy(() => import('./pages/ListPage/index'))
const ViewPage = lazy(() => import('./pages/ViewPage/index'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>로딩중...</div>}>
        <Switch>
          <Route path="/" component={ListPage} exact />
          <Route path="/view/:id" component={ViewPage} exact />
        </Switch>
      </Suspense>
    </div>
  )
}

export default App
