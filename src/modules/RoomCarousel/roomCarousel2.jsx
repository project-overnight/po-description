import { useReducer, useEffect } from 'react';

const previous = (length, current) => (current - 1 + length) % length;

const next = (length, current) => {
  console.log(`length ${length} current ${current}`);
  return (current + 1) % length;
};

const transitionTime = 500;
const smooth = `transform ${transitionTime}ms ease`;
const initialCarouselState = {
  desired: 0,
  active: 0,
};


function carouselReducer(state, action) {
  console.log(`state offset ${state.offset}, desired ${state.desired}, active ${state.active}, action ${action.type}`);
  switch (action.type) {
    case 'next':
      return { ...state, desired: next(action.length, state.active) };
    case 'prev':
      return { ...state, desired: previous(action.length, state.active) };
    case 'done':
      return { ...state, active: state.desired };
    default:
      return state;
  }
}
function useCarousel(length) {
  const [state, dispatch] = useReducer(carouselReducer, initialCarouselState);

  useEffect(() => {
    const id = setTimeout(() => dispatch({ type: 'done' }), transitionTime);
    return () => clearTimeout(id);
  }, [state.desired]);

  const reactStyle = {
    transform: `translateX(-${(state.active) * 100})`,
    width: `${(100 * (length)) / 3}%`,
    // left: `-${(state.active) * 100}%`,
  };
  if (state.desired !== state.active) {
    const location = Math.abs(state.desired);
    // const direction = Math.sign(state.desired - state.active);
    const shift = (((100 * location * -1) / (length)));
    reactStyle.transition = smooth;
    console.log(shift);
    reactStyle.transform = `translateX(${shift}%)`;
  }
  return [state.active, (e) => dispatch({ type: e, length }), reactStyle];
}
export default useCarousel;
