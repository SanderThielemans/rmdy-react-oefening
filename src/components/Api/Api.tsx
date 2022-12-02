import React from 'react'
import GetRandomUser, { User } from './Api.service';
import { Container, DataList, UserContainer } from './Api.styles';

const Api: React.FC = () => {

    const [data, setData] = React.useState([] as Array<User>)

    React.useEffect(() => {
        
    }, [])

    return (
        <Container>
            <DataList>
                {data.length > 0 ? 'Show userlist here' : <p>Fetching users...</p>}
            </DataList>
        </Container>
    )
}


export default Api;


