export class FeedComponent{
    async readFeedPosts(count){
        const URL = `http://localhost:4000/Post/buscarTodosPostsFeed?count=${count}`
        try {
            const response = await fetch(URL,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(response => response.json())

            return response
        }
        catch(err){
            console.log(err)
        }
    }
}