function Con2(props)
{
    if(props.Professor)
    {
        return <h1>yes professor :{props.subject}</h1>
    }
    else
    {
        return <h1>Not a Professor</h1>
    }
}
export default Con2;