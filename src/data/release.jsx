export function ReleaseInfo() {
  return (
    <>
      {' '}
      <li>Include Google OR-Tools in bundled packages.</li>
      <li>Enable output of intermediate solutions for HiGHS.</li>
      <li>
        Add support for producing a JSON-based version of FlatZinc as the output
        format of the MiniZinc compiler.
      </li>
      <li>
        Add the <code>cumulatives</code> scheduling constraint to the library.
      </li>
      <li>
        Add optional versions of the <code>global_cardinality</code>{' '}
        constraints.
      </li>
      <li>
        Add optional versions of <code>count_*</code> global constraints.
      </li>
      <li>Stabilise the MiniZinc IDE solution visualisation library.</li>
    </>
  )
}
