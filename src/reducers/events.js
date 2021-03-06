import { CREATE_EVENT, DELETE_ALL_EVENTS,DELETE_EVENT} from '../actions/index'
// action = {
//     type: 'CREATE_EVENT',
//     title: '2020トウキュオリンピックのお知らせ',
//     body:'2020年に東京でオリンピックを開催します！つきましては、、、、、'
// }
// # before
// state = []
//
//#after
//state = [
//  {
//     id:1,
//     title: '2020トウキュオリンピックのお知らせ',
//     body:'2020年に東京でオリンピックを開催します！つきましては、、、、、'
//  }
//]
//
//# before
// state = [
//     { id: 1, title: 'タイトル1', body: 'ボディー1' },
//     { id: 2, title: 'タイトル２', body: 'ボディー2' },
//     { id: 3, title: 'タイトル3', body: 'ボディー3' },
// ]
//
//# after
//state = [
//     { id: 1, title: 'タイトル1', body: 'ボディー1' },
//     { id: 2, title: 'タイトル２', body: 'ボディー2' },
//     { id: 3, title: 'タイトル3', body: 'ボディー3' },
//     {
//       id: 4,
//       title: '2020トウキュオリンピックのお知らせ',
//       body:'2020年に東京でオリンピックを開催します！つきましては、、、、、'
//     }
//]
const events = (state = [], action) => {
    switch (action.type) {
        case CREATE_EVENT:
            const event = { title: action.title, body: action.body }
            const length = state.length
            let id = length === 0 ? 1 : state[length - 1].id + 1
            return [...state, { id, ...event }]
        case DELETE_EVENT:
            return state.filter(event => event.id !== action.id)
        case DELETE_ALL_EVENTS:
            return []
        default:
            return state
    }
}

export default events