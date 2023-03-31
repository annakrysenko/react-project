import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getCurrentlyReading,
  getFinishedReading,
  getGoingToRead,
} from 'redux/books/booksSelectors';
import {
  InfoTitle,
  InfoMainContainer,
  InfoIcon,
  InfoDescription,
  InfoPositioningContainer,
  InfoItem,
  InfoGapContainer,
  InfoContainer,
  InfoList,
  InfoText,
  InfoMobileLink,
} from './Libraryinfo.styled';

function LibraryInfo() {
  const [visibility, setVisibility] = useState(true);

  const goingToRead = useSelector(getGoingToRead);
  const finished = useSelector(getFinishedReading);
  const redingNow = useSelector(getCurrentlyReading);

  const notEmptyBooks = () => {
    return (
      goingToRead.length > 0 && finished.length > 0 && redingNow.length > 0
    );
  };

  const closeModal = () => {
    setVisibility(false);
  };
  console.log(notEmptyBooks());
  return (
    <>
      {notEmptyBooks() && visibility && (
        <InfoMainContainer>
          <InfoContainer>
            <InfoGapContainer>
              <div>
                <div>
                  <InfoTitle>Step 1.</InfoTitle>
                </div>
                <div>
                  <InfoPositioningContainer>
                    <InfoIcon>
                      <svg
                        width="22"
                        height="17"
                        viewBox="0 0 22 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 0.5C18.89 0.15 17.67 0 16.5 0C14.55 0 12.45 0.4 11 1.5C9.55 0.4 7.45 0 5.5 0C3.55 0 1.45 0.4 0 1.5V16.15C0 16.4 0.25 16.65 0.5 16.65C0.6 16.65 0.65 16.6 0.75 16.6C2.1 15.95 4.05 15.5 5.5 15.5C7.45 15.5 9.55 15.9 11 17C12.35 16.15 14.8 15.5 16.5 15.5C18.15 15.5 19.85 15.8 21.25 16.55C21.35 16.6 21.4 16.6 21.5 16.6C21.75 16.6 22 16.35 22 16.1V1.5C21.4 1.05 20.75 0.75 20 0.5ZM20 14C18.9 13.65 17.7 13.5 16.5 13.5C14.8 13.5 12.35 14.15 11 15V3.5C12.35 2.65 14.8 2 16.5 2C17.7 2 18.9 2.15 20 2.5V14Z"
                          fill="#A6ABB9"
                        />
                        <path
                          d="M16.5 6C17.38 6 18.23 6.09 19 6.26V4.74C18.21 4.59 17.36 4.5 16.5 4.5C14.8 4.5 13.26 4.79 12 5.33V6.99C13.13 6.35 14.7 6 16.5 6Z"
                          fill="#A6ABB9"
                        />
                        <path
                          d="M12 7.99003V9.65003C13.13 9.01003 14.7 8.66003 16.5 8.66003C17.38 8.66003 18.23 8.75003 19 8.92003V7.40003C18.21 7.25003 17.36 7.16003 16.5 7.16003C14.8 7.16003 13.26 7.46003 12 7.99003Z"
                          fill="#A6ABB9"
                        />
                        <path
                          d="M16.5 9.82996C14.8 9.82996 13.26 10.12 12 10.66V12.32C13.13 11.68 14.7 11.33 16.5 11.33C17.38 11.33 18.23 11.42 19 11.59V10.07C18.21 9.90996 17.36 9.82996 16.5 9.82996Z"
                          fill="#A6ABB9"
                        />
                      </svg>
                    </InfoIcon>
                    <InfoDescription>Create your own library</InfoDescription>
                  </InfoPositioningContainer>
                  <InfoList>
                    <InfoItem>
                      <InfoIcon>
                        <svg
                          width="10"
                          height="12"
                          viewBox="0 0 10 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.59013 8.58096C8.56655 8.46653 8.47333 8.41332 8.40533 8.34181C7.91179 7.82059 7.41058 7.30395 6.91595 6.78217C6.70538 6.56075 6.68673 6.32446 6.85289 6.15625C7.01905 5.98805 7.25101 6.00292 7.4561 6.2169C8.24648 7.03658 9.03467 7.85854 9.82067 8.6828C10.062 8.93626 10.0592 9.11362 9.81574 9.36936C9.03632 10.1871 8.25489 11.0026 7.47145 11.8158C7.25539 12.0401 7.04372 12.0572 6.86824 11.8799C6.69276 11.7025 6.71909 11.4731 6.92747 11.2534C7.41607 10.7385 7.90905 10.2281 8.3982 9.71436C8.46674 9.64227 8.55722 9.58677 8.58519 9.47292C8.50787 9.39396 8.41245 9.43115 8.32746 9.43115C5.75121 9.42848 3.17387 9.42714 0.595428 9.42714C0.10683 9.42714 0.00318837 9.31615 0.00318841 8.80695C0.00318865 6.08054 0.00318889 3.35336 0.00318913 0.625427C-0.00296302 0.530019 -0.00020689 0.434213 0.0114165 0.33936C0.0530921 0.128244 0.181411 -0.00391569 0.391986 8.88054e-05C0.60256 0.00409426 0.72704 0.136828 0.765975 0.348517C0.775414 0.433781 0.777432 0.51976 0.772006 0.605405C0.772006 3.18001 0.775843 5.75461 0.767618 8.32636C0.767618 8.56951 0.833969 8.62616 1.0577 8.62501C3.47876 8.617 5.89982 8.62043 8.32088 8.61872C8.4141 8.62329 8.51007 8.65648 8.59013 8.58096Z"
                            fill="#FF6B08"
                          />
                        </svg>
                      </InfoIcon>
                      <InfoText>
                        Add there books which you are going to read.
                      </InfoText>
                    </InfoItem>
                  </InfoList>
                </div>
              </div>
            </InfoGapContainer>
            <InfoGapContainer>
              <div>
                <div>
                  <InfoTitle>Step 2.</InfoTitle>
                </div>
                <div>
                  <InfoPositioningContainer>
                    <InfoIcon>
                      <svg
                        width="15"
                        height="17"
                        viewBox="0 0 15 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.36 2L7.76 4H13V10H9.64L9.24 8H2V2H7.36ZM9 0H0V17H2V10H7.6L8 12H15V2H9.4L9 0Z"
                          fill="#A6ABB9"
                        />
                      </svg>
                    </InfoIcon>
                    <InfoDescription>
                      Create your first training
                    </InfoDescription>
                  </InfoPositioningContainer>
                  <InfoList>
                    <InfoItem>
                      <InfoIcon>
                        <svg
                          width="10"
                          height="12"
                          viewBox="0 0 10 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.59013 8.58096C8.56655 8.46653 8.47333 8.41332 8.40533 8.34181C7.91179 7.82059 7.41058 7.30395 6.91595 6.78217C6.70538 6.56075 6.68673 6.32446 6.85289 6.15625C7.01905 5.98805 7.25101 6.00292 7.4561 6.2169C8.24648 7.03658 9.03467 7.85854 9.82067 8.6828C10.062 8.93626 10.0592 9.11362 9.81574 9.36936C9.03632 10.1871 8.25489 11.0026 7.47145 11.8158C7.25539 12.0401 7.04372 12.0572 6.86824 11.8799C6.69276 11.7025 6.71909 11.4731 6.92747 11.2534C7.41607 10.7385 7.90905 10.2281 8.3982 9.71436C8.46674 9.64227 8.55722 9.58677 8.58519 9.47292C8.50787 9.39396 8.41245 9.43115 8.32746 9.43115C5.75121 9.42848 3.17387 9.42714 0.595428 9.42714C0.10683 9.42714 0.00318837 9.31615 0.00318841 8.80695C0.00318865 6.08054 0.00318889 3.35336 0.00318913 0.625427C-0.00296302 0.530019 -0.00020689 0.434213 0.0114165 0.33936C0.0530921 0.128244 0.181411 -0.00391569 0.391986 8.88054e-05C0.60256 0.00409426 0.72704 0.136828 0.765975 0.348517C0.775414 0.433781 0.777432 0.51976 0.772006 0.605405C0.772006 3.18001 0.775843 5.75461 0.767618 8.32636C0.767618 8.56951 0.833969 8.62616 1.0577 8.62501C3.47876 8.617 5.89982 8.62043 8.32088 8.61872C8.4141 8.62329 8.51007 8.65648 8.59013 8.58096Z"
                            fill="#FF6B08"
                          />
                        </svg>
                      </InfoIcon>
                      <InfoText>
                        Set a goal, choose period, start training.
                      </InfoText>
                    </InfoItem>
                  </InfoList>
                </div>
              </div>
            </InfoGapContainer>
            <InfoMobileLink onClick={closeModal}>Ok</InfoMobileLink>
          </InfoContainer>
        </InfoMainContainer>
      )}
    </>
  );
}

export default LibraryInfo;
