// @flow

import bcrypt from 'bcrypt'
import bodyParser from 'body-parser'
import express from 'express'
import jwt from 'jwt-simple'

import authExtensions from '../_configuration/urb-base-server/authExtensions'
import delayPromise from '../urb-base-universal/delayPromise'
import getNewUser from '../_configuration/urb-base-server/graphql/model/getNewUser'
import logServerRequest from './logServerRequest'
import { getObjectManager } from './graphql/ObjectManager'
import { requestLoggerAuth } from '../_configuration/urb-base-server/requestLoggers'

import { validateEmail } from '../urb-base-universal/validation'

// Read environment
require('dotenv').load()

const auth = express()

auth.use(bodyParser.json())
auth.use((req, res, next) => logServerRequest(req, res, next, requestLoggerAuth))

//

async function login(req, res) {
  const objectManager = await getObjectManager(req, res)
  if (objectManager.siteInformation) {
    let User_AccountName = req.body.User_AccountName.toLowerCase()
    let User_AccountPassword = req.body.User_AccountPassword

    delayPromise(1000) // Wait for a second to slow down a possible potential force attack
      .then(() =>
        objectManager.getObjectList('User', {
          User_AccountName: User_AccountName,
        }),
      )
      .then(arr_Users => {
        if (arr_Users.length == 0) res.status(401).json({ error: '💔  Incorrect user' })
        else {
          const a_User = arr_Users[0]

          bcrypt.compare(User_AccountPassword, a_User.User_AccountPassword, function(
            err,
            User_AccountPasswordIsCorrect,
          ) {
            if (User_AccountPasswordIsCorrect) {
              res.codeFoundriesInjected = { user: a_User }

              // User has authenticated correctly thus we create a JWT token
              var token = jwt.encode({ user_id: a_User.id }, process.env.JWT_SECRET)

              res.cookie('UserToken1', token, { httpOnly: false }) // ZZZ THIS IS CRITICAL. MUST REPLACE ALL HTTP ONLY COOKIES WITH TRUE
              res.json({ success: true, UserToken2: a_User.UserToken2 })
            } else res.status(401).json({ error: '💔  Incorrect password' })
          })
        }
      })
      .catch(reason => {
        res.status(401).json({ error: reason })
      })
  }
}
auth.post('/login', login)

//

async function createuser(req, res) {
  const objectManager = await getObjectManager(req, res)
  if (objectManager.siteInformation) {
    let User_AccountName = req.body.User_AccountName.toLowerCase()
    let User_AccountPassword = req.body.User_AccountPassword
    objectManager
      .getObjectList('User', {
        User_site_id: objectManager.siteInformation.site_id,
        User_AccountName: User_AccountName,
      })
      .then(arr_Users => {
        if (arr_Users.length > 0) return Promise.reject('💔  User account already exists')
        else
          return new Promise(resolve => {
            bcrypt.hash(User_AccountPassword, 8, (err, User_AccountPassword) =>
              resolve(User_AccountPassword),
            )
          }).then(User_AccountPassword => {
            // If account name looks like email address, use it as email
            const accountNameIsValidEmail = validateEmail(User_AccountName)
            const User_Email = accountNameIsValidEmail ? User_AccountName : ''

            const a_User = Object.assign(getNewUser(objectManager.siteInformation.site_id), {
              UserToken2:
                Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2),
              User_AccountName: User_AccountName,
              User_AccountPassword: User_AccountPassword,
              User_DisplayName: User_AccountName,
              User_Email: User_Email,
            })
            return objectManager.add('User', a_User)
          })
      })
      .then(user_id =>
        objectManager.getOneObject('User', {
          id: user_id,
          User_site_id: objectManager.siteInformation.site_id,
        }),
      )
      .then(a_User => {
        res.codeFoundriesInjected = { user: a_User }

        // User has been created thus we create a JWT token
        var token = jwt.encode({ user_id: a_User.id }, process.env.JWT_SECRET)

        res.cookie('UserToken1', token, { httpOnly: false })
        res.json({ success: true })
      })
      .catch(reason => {
        res.status(401).json({ error: '' + reason })
      })
  }
}
auth.post('/createuser', createuser)

//

auth.post('/logout', (req, res) => {
  res.cookie('UserToken1', '', { httpOnly: false, expires: new Date(1) })
  res.json({ success: true })
})

// Add extensions - custom configurations
authExtensions(auth)

export default auth
