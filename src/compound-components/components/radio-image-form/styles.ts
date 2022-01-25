import styled from "styled-components";

const RadioImageFormWrapper = styled.div`
  form {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .radio-button-group {
    position: relative;
    cursor: pointer;
    margin-right: 0.75rem;

    /* HIDE RADIO */
    [type="radio"] {
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
    }

    /* IMAGE STYLES */
    [type="radio"] ~ img {
      cursor: pointer;
      display: block;
      height: 100px;
      width: 100px;
    }

    .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: 0;
      transition: 0.3s ease;
    }

    [type="radio"]:focus ~ .overlay {
      opacity: 1;
      outline: 2px solid #86a8df;

      svg {
        display: none;
      }
    }

    /* CHECKED STYLES */
    [type="radio"]:checked ~ .overlay {
      opacity: 1;
      border: 2px solid #ffffff;

      svg {
        display: block;
        color: white;
        font-size: 100px;
        position: absolute;
        top: 3.5%;
        left: 4%;
        text-align: center;
      }
    }

    svg {
      display: none;
    }
  }
`;

export default RadioImageFormWrapper;
