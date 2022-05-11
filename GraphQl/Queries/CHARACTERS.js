import { gql } from "@apollo/client";

const CHARACTERS = gql`
  query characters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        species
        image
      }
    }
  }
`;

export default CHARACTERS;
