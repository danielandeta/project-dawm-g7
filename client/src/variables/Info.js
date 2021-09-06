var url=""
class Info extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div><LinearProgress variant="determinate" value={progress} /></div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.name} {item.price}
              </li>
            ))}
          </ul>
        );
      }
    }
  }