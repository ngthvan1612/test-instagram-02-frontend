import { Link } from "react-router-dom"

const NavMenu = () => {
  return (
    <ol>
      
      <li><Link to={'/admin/user-management'}>User management</Link></li>
      
      <li><Link to={'/admin/post-management'}>Post management</Link></li>
      
      <li><Link to={'/admin/user-tag-friend-post-management'}>UserTagFriendPost management</Link></li>
      
      <li><Link to={'/admin/reaction-management'}>Reaction management</Link></li>
      
      <li><Link to={'/admin/comment-management'}>Comment management</Link></li>
      
      <li><Link to={'/admin/announce-management'}>Announce management</Link></li>
      
      <li><Link to={'/admin/follower-management'}>Follower management</Link></li>
      
      <li><Link to={'/admin/story-management'}>Story management</Link></li>
      
      <li><Link to={'/admin/group-message-management'}>GroupMessage management</Link></li>
      
      <li><Link to={'/admin/user-group-message-management'}>UserGroupMessage management</Link></li>
      
      <li><Link to={'/admin/message-management'}>Message management</Link></li>
      
    </ol>
  )
}

export default NavMenu