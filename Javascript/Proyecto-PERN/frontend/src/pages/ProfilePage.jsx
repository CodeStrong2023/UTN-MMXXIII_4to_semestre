import {useAuth} from "../context/useAuth"

function ProfilePage() {
  const {user} = useAuth();
  return (
    <div>
      {JSON.stringify(user, null, 2)}
    </div>
  )
}

export default ProfilePage