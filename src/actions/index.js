export const SOME_ACTION = 'SOME_ACTION'
export const CONTACT_SELECTED = 'CONTACT_SELECTED'

export const someAction = (incomingData) => ({
    type: SOME_ACTION,
    data: incomingData
  });

export const contactSelected = () => ({
  type: CONTACT_SELECTED,
  itemIndex:2 
});