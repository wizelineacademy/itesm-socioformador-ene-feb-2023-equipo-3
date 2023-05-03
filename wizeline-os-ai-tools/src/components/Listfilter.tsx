interface ListFilterProps {
    data: Data[];
  }
  
  interface ListFilterState {
    filter: string;
  }
  
  interface Data {
    id: number;
    name: string;
    age: number;
  }

  