React router 를 사용해, nested route을 구현했을 때,
URL이 바뀜에 따라 어떤 Lifecycle method 가 실행되는지 알아봅시다.

Check the console message.

/users

```
App - constructor
App - getDerivedStateFromProps
App - render
**Users - constructor
**Users - getDerivedStateFromProps
**Users - render
**Users - componentDidMount
App - componentDidMount
```

/users -> /

```
**Users - componentWillUnmount
```

/users -> /users/2

```
**Users - getDerivedStateFromProps
**Users - shouldComponentUpdate
**Users - render
****UserDetail - constructor
****UserDetail - getDerivedStateFromProps
****UserDetail - render
**Users - getSnapshotBeforeUpdate
****UserDetail - componentDidMount
**Users - componentDidUpdate
```

/users/2 -> /users/1

```
**Users - getDerivedStateFromProps
**Users - shouldComponentUpdate
**Users - render
****UserDetail - getDerivedStateFromProps
****UserDetail - shouldComponentUpdate
****UserDetail - render
****UserDetail - getSnapshotBeforeUpdate
**Users - getSnapshotBeforeUpdate
****UserDetail - componentDidUpdate
**Users - componentDidUpdate
```

/users/1 -> /accounts

```
**Accounts - componentWillMount
**Accounts - render
**Users - componentWillUnmount
****UserDetail - componentWillUnmount
**Accounts - componentDidMount
```

/users/1 -> /

```
**Users - componentWillUnmount
****UserDetail - componentWillUnmount
```

/users/1 , Update App's users state

```
App - getDerivedStateFromProps
App - shouldComponentUpdate
App - render
**Users - getDerivedStateFromProps
**Users - shouldComponentUpdate
**Users - render
****UserDetail - getDerivedStateFromProps
****UserDetail - shouldComponentUpdate
****UserDetail - render
****UserDetail - getSnapshotBeforeUpdate
**Users - getSnapshotBeforeUpdate
App - getSnapshotBeforeUpdate
****UserDetail - componentDidUpdate
**Users - componentDidUpdate
App - componentDidUpdate
```

/users/1 , Update Apps accounts state

```
App - getDerivedStateFromProps
App - shouldComponentUpdate
App - render
**Users - getDerivedStateFromProps
**Users - shouldComponentUpdate
**Users - render
****UserDetail - getDerivedStateFromProps
****UserDetail - shouldComponentUpdate
****UserDetail - render
****UserDetail - getSnapshotBeforeUpdate
**Users - getSnapshotBeforeUpdate
App - getSnapshotBeforeUpdate
****UserDetail - componentDidUpdate
**Users - componentDidUpdate
App - componentDidUpdate
```
