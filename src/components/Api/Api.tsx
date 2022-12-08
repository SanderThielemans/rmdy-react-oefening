import React from 'react'
import GetRandomUser, { User } from './Api.service';
import { Container, DataList, UserContainer } from './Api.styles';

const Api: React.FC = () => {

    const [data, setData] = React.useState([] as Array<User>)

    React.useEffect(() => {
        GetRandomUser()
        .then(users => {
            setData(users);
        })
        .catch(error => {
            console.error(error);
        });
    }, [])

    return (
        <Container>
            <DataList>
                {data.length <= 0 ? <p>Fetching users...</p> : data.map((user, index) => {
                    return (
                        <UserContainer key={index} gender={user.gender}>
                            <img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} />
                            <h2>{user.name.first} {user.name.last}</h2>
                            <p className='gender'>{user.gender}</p>
                        </UserContainer>
                    );
                })}
            </DataList>
        </Container>
    )
}


export default Api;


