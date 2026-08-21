const array = [{
    name: 'Oxidize',
    number: 8
},
{
    name: 'Boron',
    number: 5
},
{
    name: 'Carbon',
    number: 6
},
{
    name: 'Nitrogen',
    number: 7
}]

export function Lista({array}) {
    return (
        <ul>
            {array.map((item) => (
                <li key={item.name}>{item.name} - {item.number}</li>
            ))}
        </ul>
    )
}