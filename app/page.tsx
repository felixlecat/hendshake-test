export default function Page() {
  return (
    <main>
      <h1>Application Form</h1>
        <form>
          <div>
            <label>
              Activity
            </label>
            <input type='text'>
            </input>
          </div>
          <div>  
            <label>
              Price
            </label>
            <input type='number'>
            </input>
          </div>
          <div>
            <label>
              Type
            </label>
            <select>
              <option value='education'>Education</option>
              <option value='recreational'>Recreational</option>
              <option value='social'>Social</option>
              <option value='diy'>DIY</option>
              <option value='charity'>Charity</option>
              <option value='cooking'>Cooking</option>
              <option value='relaxation'>Relaxation</option>
              <option value='music'>Music</option>
              <option value='busywork'>Busywork</option>
            </select>
          </div>
          <div>
            <label>
              Booking Required
            </label>
            <input type='checkbox'>
            </input>
          </div>
          <div>
            <label>
              Accessability
            </label>
            <input type='range' min='0' max='10'>
            </input>
          </div>
        </form>
        <div>
          <button type='button'>
            Submit
          </button>
        </div>

        <div>
          <h2>List</h2>

        </div>
    </main>
  );
}