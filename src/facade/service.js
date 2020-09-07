import * as firebase from 'firebase/app';
import DatabaseManager from './DatabaseManager';
import AuthenticationManager from './AuthenticationManager';
import UserListManager from './UserListManager';
import { CONFIG } from './config';

let initialized = false;

/**
 * Helper method to make sure the app only get initialized once.
 */
function init() {
  if (!initialized) {
    firebase.initializeApp(CONFIG);
    initialized = true;
  }
}

/**
 * Get an instance of DatabaseManager.
 * @returns {DatabaseManager}
 *  Instance of DatabaseManager
 */
export function getDatabase() {
  init();
  return DatabaseManager.getInstance();
}

/**
 * Get an instance of AuthenticationManager.
 * @returns {AuthenticationManager}
 *  Instance of AuthenticationManager
 */
export function getAuthentication() {
  init();
  return AuthenticationManager.getInstance();
}

/**
 * Get an instance of UserListManager.
 * @returns {UserListManager}
 *  Instance of UserListManager
 */
export function getUserList() {
  init();
  return UserListManager.getInstance();
}

export default {
  getDatabase: getDatabase,
  getAuthentication: getAuthentication,
  getUserList: getUserList,
};
