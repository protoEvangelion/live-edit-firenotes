import { styled } from '@/style'

export const AccordionStyles = styled.div`
  .accordion {
    list-style: none;
    margin: 0;
    padding-left: 0;

    h3 {
      background: none;
      border-radius: 5%;
      cursor: pointer;
      margin: 0.5rem 0;
      padding: 0.25rem 1rem;
      transition: background 0.5s;

      &:hover {
        background: rgba(aqua, 0.25);
        transition: background 0.5s;
      }
    }

    > div:first-child {
      cursor: pointer;
    }
  }

  .children-container {
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
  }

  .visible {
    display: flex;
  }

  .hidden {
    display: none;
  }
`
