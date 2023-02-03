import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SettingProfile from './settingProfile'
import SettingPassword from './settingPassword'

function singleEdit() {
  return (
    <div>
        <Switch>
            <Route path="/profile/3/Edit_profile" component={SettingProfile} />
            <Route path="/profile/3/Edit_pass" component={SettingPassword} />
        </Switch>
    </div>
  )
}

export default singleEdit