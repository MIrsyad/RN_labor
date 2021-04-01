import {gql} from '@apollo/client';

export const GET_ARTICLES_BY_CATEGORIES = gql`
  query($id: Int!) {
    getAllArticlesByCategories(id: $id) {
      id
      name
      articles {
        id
        title
        content
        likes
        dislikes
        status
        approved_by
        deleted_by
        created_at
        categories {
          id
          name
        }
        author {
          id
          fullname
          email
          roles
        }
        comments {
          id
          comment
          users {
            id
            fullname
            email
            roles
          }
        }
      }
    }
  }
`;

export default {
  get: GET_ARTICLES_BY_CATEGORIES,
};
