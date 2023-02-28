import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AdminLayout from './admin/Layout'

import AdminUserManagement from './admin/user/UserManagement'
import AdminPostManagement from './admin/post/PostManagement'
import AdminUserTagFriendPostManagement from './admin/user-tag-friend-post/UserTagFriendPostManagement'
import AdminReactionManagement from './admin/reaction/ReactionManagement'
import AdminCommentManagement from './admin/comment/CommentManagement'
import AdminAnnounceManagement from './admin/announce/AnnounceManagement'
import AdminFollowerManagement from './admin/follower/FollowerManagement'
import AdminGroupMessageManagement from './admin/group-message/GroupMessageManagement'
import AdminUserGroupMessageManagement from './admin/user-group-message/UserGroupMessageManagement'
import AdminMessageManagement from './admin/message/MessageManagement'

import CommonLayout from './common/Layout'
import NotFound from './exception/NotFound'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='admin' element={<AdminLayout/>}>
            
            <Route path='user-management' element={<AdminUserManagement/>}/>
            <Route path='post-management' element={<AdminPostManagement/>}/>
            <Route path='user-tag-friend-post-management' element={<AdminUserTagFriendPostManagement/>}/>
            <Route path='reaction-management' element={<AdminReactionManagement/>}/>
            <Route path='comment-management' element={<AdminCommentManagement/>}/>
            <Route path='announce-management' element={<AdminAnnounceManagement/>}/>
            <Route path='follower-management' element={<AdminFollowerManagement/>}/>
            <Route path='group-message-management' element={<AdminGroupMessageManagement/>}/>
            <Route path='user-group-message-management' element={<AdminUserGroupMessageManagement/>}/>
            <Route path='message-management' element={<AdminMessageManagement/>}/>
          </Route>
          <Route path='' element={<CommonLayout/>}>

          </Route>
          <Route path='*' element={<NotFound/>}>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App