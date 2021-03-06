import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  .card {
    background: var(--card);
    width: 100%;
    max-width: 670px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 20px 200px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    padding: 25px;
    margin-top: 150px;
    animation-name: fadeDown;
    animation-duration: 1.2s;
    animation-delay: 0s;
    animation-timing-function: cubic-bezier(0.69, 0.085, 0.39, 0.97);

    @keyframes fadeDown {
      from {
        opacity: 0;
        transform: translateY(-250px);
      }
      to {
        opacity: 1;
        transform: translateY(0px);
      }
    }
  }

  .stats {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 75px;

    .infos {
      width: calc(100% - 240px - 25px);

      h1 {
        font-size: 27px;
        font-weight: var(--bold);
        color: var(--font);
        margin-bottom: 10px;
      }

      h2 {
        font-size: 18px;
        color: var(--font);
        font-weight: var(--regular);
        height: 66px;
      }

      .numbers {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
        color: var(--font);

        .num_repo {
          display: flex;
          flex-direction: column;

          span {
            font-size: 20px;
            font-weight: var(--bold);
          }

          span + span {
            font-size: 16px;
            font-weight: var(--regular);
            margin-top: 15px;
          }
        }
      }
    }

    .media {
      position: absolute;
      right: 0;
      top: -50px;
      width: 100%;
      max-width: 240px;
      height: auto;
      max-height: 240px;

      img {
        width: 100%;
        border-radius: 10px;
        box-shadow: 10px 15px 100px rgba(0, 0, 0, 0.3);
      }

      a {
        position: absolute;
        right: 60px;
        bottom: -25px;
        background: var(--white);
        border-radius: 50%;
        width: 59px;
        height: 59px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.5s;
        color: var(--primary);

        &:hover {
          background-color: var(--primary);
          color: var(--white);
          transition: all 0.5s;

          svg {
            color: var(--white) !important;
            transition: all 0.5s;
          }
        }
      }

      a.git {
        right: -15px;
        padding-top: 2px;
      }
    }
  }

  .repos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 20px;

    .repo {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: center;
      color: var(--black);
      text-decoration: none;
      background: var(--white);
      border: 1px solid var(--borderColor);
      padding: 12px 15px;
      color: var(--font);
      border-radius: 5px;
      transition: all 0.5s;

      &:hover {
        background: var(--primary);
        border-color: var(--primary);
        transition: all 0.5s;

        div,
        span {
          color: var(--primaryHover);
          transition: all 0.3s;
        }
      }

      div {
        font-size: 16px;
        color: var(--font);
        font-weight: var(--bold);
      }

      span {
        font-size: 15px;
        font-weight: var(--regular);
        color: var(--lightgray);
        margin-top: 7px;
      }
    }
  }

  @media (max-width: 780px) {
    .card {
      margin-top: 80px;
    }
  }

  @media (max-width: 650px) {
    .card {
      margin-top: 50px;
    }

    .stats {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      margin-bottom: 40px;

      .infos {
        margin-top: 60px;
        width: 100%;
        max-width: 350px;

        h1,
        h2 {
          text-align: center;
          height: auto;
        }

        .numbers {
          margin-top: 30px;
        }
      }

      .media {
        position: relative;
        top: initial;
        right: initial;
        margin-top: -60px;
      }
    }

    .repos {
      grid-template-rows: repeat(6, 1fr);
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 350px) {
    .stats .infos .numbers .num_repo span + span {
      font-size: 14px;
    }
  }
`
