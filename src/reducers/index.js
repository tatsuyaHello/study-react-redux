//アプリケーション内に存在する全てのreducerを総括する。
//つまり、全reducerを一つのreducerに結合する役割を担う。

// combineReducersがreducerを結合するための関数
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import events from './events'

export default combineReducers({ events, form  })
