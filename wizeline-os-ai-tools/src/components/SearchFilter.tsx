interface FilterProps {
    onSearchTermChange: (searchTerm: string) => void;
  }
  
  interface FilterState {
    searchTerm: string;
  }
  
  class SearchFilter extends React.Component<FilterProps, FilterState> {
    constructor(props: FilterProps) {
      super(props);
      this.state = {
        searchTerm: "",
      };
    }
  
    handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const searchTerm = event.target.value;
      this.setState({ searchTerm });
      this.props.onSearchTermChange(searchTerm);
    };
  
    render() {
      const { searchTerm } = this.state;
  
      return (
        <div>
          <input type="text" value={searchTerm} onChange={this.handleSearchTermChange} />
        </div>
      );
    }
  }
  