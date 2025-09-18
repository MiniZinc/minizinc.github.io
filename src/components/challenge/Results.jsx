import { Button } from '@/components/Button'
import { Link } from '@/components/Link'
import { Medals } from '@/components/challenge/Medals'
import Script from 'next/script'
import { medals } from '@/data/challenge'

function statusLegend(year) {
  if (year >= 2012 && year <= 2014) {
    return (
      <ul>
        <li>
          <b>S</b> indicates that a solution was found,{' '}
        </li>
        <li>
          <b>C</b> indicates that the search was complete,{' '}
        </li>
        <li>
          <b>INC</b> indicates an incorrect answer{' '}
        </li>
        <li>
          <b>MZN</b> indicates that flattening aborted (time-out or
          out-of-memory){' '}
        </li>
        <li>
          <b>UNK</b> indicates that no answer was returned in the time limit or
          the solver aborted.{' '}
        </li>
      </ul>
    )
  }
  return (
    <ul>
      <li>
        <b>S</b> indicates that a solution was found,
      </li>
      <li>
        <b>C</b> indicates that the search was complete,
      </li>
      <li>
        <b>ERR</b> indicates an incorrect answer or the solver aborted,
      </li>
      <li>
        <b>ERR</b> indicates that flattening aborted (time-out or
        out-of-memory),
      </li>
      <li>
        <b>UNK</b> indicates that no answer was returned in the time limit.
      </li>
    </ul>
  )
}

export function Results({ year, children }) {
  let fns = null

  async function init() {
    const response = await fetch(`/challenge/${year}/results.json`)
    const data = await response.json()
    fns = challengeResults(data)
    console.log('data ready')
  }

  return (
    <>
      <Script src="https://cdn.plot.ly/plotly-latest.min.js" />
      <Script src="/challenge/scoring.js" onReady={() => init()} />

      <h3>Summary of Results</h3>

      <p>The results for the MiniZinc Challenge {year} are</p>

      <Medals medals={medals[year]} />

      <h3>Description of Results</h3>

      {year <= 2012 ? (
        <>
          <p>All times are given in seconds.</p>
          <p>
            Scores of 0, 1 and 2 are used in the tables rather than 0, 0.5 and
            1.
          </p>
        </>
      ) : (
        <>
          <p>All times are given in milliseconds.</p>

          <p>
            Scores of 0, 1 and 2 are used in the tables rather than 0, 0.5 and
            1.
          </p>

          <p>
            A score of 0.0 indicates a worse answer in quality (worse objective,
            no proof of optimality, or no answer for satisfaction problems).
            <br />A score of 1.0 indicates a better solution in quality. When
            the quality is the same, the 1.0 purse is split with respect to time
            used.
          </p>
        </>
      )}

      <p>
        If a promoted entry does not recognize an option (or states that it is
        just ignored), times and solutions from the previous category are used
        for scoring. The suffixes <i>-fd</i>, <i>-free</i>,{' '}
        {'open' in medals[year] ? (
          <>
            <i>-par</i>, and <i>-open</i> (for the parallel portfolio solvers
            entered)
          </>
        ) : (
          <>
            and <i>-par</i>
          </>
        )}{' '}
        at the end of the solver names indicate which configuration the solvers
        were run with.
      </p>

      <p>The time limit includes both MiniZinc compilation and solving.</p>

      <p>
        In the Status column: <br />
      </p>

      {statusLegend(year)}

      {children}

      <h3>Download all problems</h3>

      <p>
        All problems are available in a zipped tar-ball{' '}
        <Link href={`mznc${year}_probs.tar.gz`}>here</Link>.
      </p>

      <h3>Detailed Results</h3>

      <p>
        Select a list of solvers and benchmarks and click on &ldquo;Compute
        Results&rdquo; to score the solvers against each other on the selected
        benchmarks. The entrants for each of the FD search, free search and
        parallel search categories can be selected with the corresponding
        buttons.
      </p>

      <table valign="top">
        <tbody>
          <tr>
            <td>
              <table valign="top" border="2">
                <colgroup>
                  <col valign="top"></col>
                  <col valign="top"></col>
                </colgroup>
                <thead></thead>
                <tbody>
                  <tr>
                    <td valign="top"> Solver selection: </td>
                    <td valign="top"> Problem selection: </td>
                  </tr>
                  <tr>
                    <td id="solver_selection" valign="top"></td>
                    <td id="problem_selection" valign="top"></td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td valign="top">
              <table border="2">
                <thead></thead>
                <tbody>
                  <tr>
                    <td>
                      <form name="score">
                        <Button
                          type="button"
                          name="compute_results"
                          className="w-full"
                          color="primary"
                          onClick={() => fns.computeSelected()}
                        >
                          Compute Results
                        </Button>
                      </form>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <form name="score">
                        <Button
                          type="button"
                          name="clear_selection"
                          className="w-full"
                          variant="outline"
                          onClick={() => fns.clearAll()}
                        >
                          Clear Selection
                        </Button>
                      </form>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <form name="score">
                        <Button
                          type="button"
                          name="select_all"
                          className="w-full"
                          variant="outline"
                          onClick={() => fns.selectAll()}
                        >
                          Select all problems
                        </Button>
                      </form>
                    </td>
                  </tr>
                  <tr id="control-fd">
                    <td>
                      <form name="score">
                        <Button
                          type="button"
                          name="select_fd"
                          className="w-full"
                          variant="outline"
                          onClick={() => fns.selectFD()}
                        >
                          Add FD category solvers
                        </Button>
                      </form>
                    </td>
                  </tr>
                  <tr id="control-free">
                    <td>
                      <form name="score">
                        <Button
                          type="button"
                          name="select_free"
                          className="w-full"
                          variant="outline"
                          onClick={() => fns.selectFree()}
                        >
                          Add Free category solvers
                        </Button>
                      </form>
                    </td>
                  </tr>
                  <tr id="control-par">
                    <td>
                      <form name="score">
                        <Button
                          type="button"
                          name="select_par"
                          className="w-full"
                          variant="outline"
                          onClick={() => fns.selectPar()}
                        >
                          Add Par category solvers
                        </Button>
                      </form>
                    </td>
                  </tr>
                  <tr id="control-open">
                    <td>
                      <form name="score">
                        <Button
                          type="button"
                          name="select_open"
                          className="w-full"
                          variant="outline"
                          onClick={() => fns.selectOpen()}
                        >
                          Add Open category solvers
                        </Button>
                      </form>
                    </td>
                  </tr>
                  <tr id="control-local">
                    <td>
                      <form name="score">
                        <Button
                          type="button"
                          name="select_local"
                          className="w-full"
                          variant="outline"
                          onClick={() => fns.selectLocal()}
                        >
                          Add Local category solvers
                        </Button>
                      </form>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td valign="top" className="score-area">
              <table valign="top" border="2">
                <thead></thead>
                <tbody>
                  <tr>
                    <td valign="top"> Plot settings: </td>
                  </tr>
                  <tr>
                    <td>
                      <form name="plot">
                        <strong>
                          <font color="red">
                            Note that plotting takes time.
                          </font>
                        </strong>
                        <br />
                        <label>
                          <input
                            className="mr-1"
                            type="checkbox"
                            id="plot_instance"
                          />
                          Create plots for each instance
                        </label>
                        <br />
                      </form>
                      Time axis scale:
                      <br />
                      <form name="plot">
                        <label>
                          <input
                            type="radio"
                            className="mr-1"
                            name="xaxis_type"
                            id="xaxis_default"
                            value="-"
                            defaultChecked
                          />
                          Default
                        </label>
                        <label className="ml-2">
                          <input
                            type="radio"
                            className="mr-1"
                            name="xaxis_type"
                            id="xaxis_linear"
                            value="linear"
                          />
                          Linear
                        </label>
                        <label className="ml-2">
                          <input
                            type="radio"
                            className="mr-1"
                            name="xaxis_type"
                            id="xaxis_log"
                            value="log"
                          />
                          Log
                        </label>
                      </form>
                      Plot lines shape:
                      <br />
                      <form name="plot">
                        <label>
                          <input
                            type="radio"
                            className="mr-1"
                            name="lineshape"
                            id="lineshape_steps"
                            value="steps"
                            defaultChecked
                          />
                          Steps
                        </label>
                        <label className="ml-2">
                          <input
                            type="radio"
                            className="mr-1"
                            name="lineshape"
                            id="lineshape_lines"
                            value="lines"
                          />
                          Lines
                        </label>
                      </form>
                    </td>
                  </tr>
                  <tr>
                    <td valign="top"> Area scoring settings: </td>
                  </tr>
                  <tr>
                    <td>
                      <form name="score">
                        <label>
                          <input
                            className="mr-1"
                            type="checkbox"
                            id="area_scoring"
                          />
                          Normalise
                        </label>
                        <br />
                      </form>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      <div id="results-section" style={{ display: 'none' }}>
        <table cellSpacing="15">
          <tbody>
            <tr></tr>
            <tr>
              <td>
                <h3> Overall</h3>
              </td>
              <td>
                <h3> Total per problem</h3>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <table
                  rules="groups"
                  cellpading="20"
                  name="total_table"
                  id="total_table"
                  cellSpacing="20"
                  border="2"
                >
                  <colgroup></colgroup>
                  <colgroup></colgroup>
                  <colgroup></colgroup>
                  <colgroup></colgroup>
                  <thead>
                    <tr>
                      <td onClick={() => fns.sortTotalTable(0, 'string')}>
                        <b>Solver </b>
                      </td>
                      <td onClick={() => fns.sortTotalTable(1, 'number')}>
                        <b>Score </b>
                      </td>
                      <td
                        className="score-incomplete"
                        onClick={() => fns.sortTotalTable(2, 'number')}
                      >
                        <b>Score Incomplete </b>
                      </td>
                      <td
                        className="score-area"
                        onClick={() => fns.sortTotalTable(3, 'number')}
                      >
                        <b>Score Area </b>
                      </td>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </td>
              <td valign="top">
                <table
                  rules="groups"
                  cellpading="20"
                  name="problem_table"
                  cellSpacing="20"
                  border="2"
                >
                  <colgroup span="2"></colgroup>
                  <colgroup span="1"></colgroup>
                  <colgroup span="1"></colgroup>
                  <colgroup span="1"></colgroup>
                  <thead>
                    <tr>
                      <td>
                        <b>Problem </b>
                      </td>
                      <td>
                        <b>Solver </b>
                      </td>
                      <td>
                        <b>Score </b>
                      </td>
                      <td className="score-incomplete">
                        <b>Score Incomplete</b>
                      </td>
                      <td className="score-area">
                        <b>Score Area</b>
                      </td>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <h3>Individual results</h3>
        <table
          frame="box"
          rules="groups"
          cellpading="20"
          name="instance_table"
          cellSpacing="20"
          border="2"
        >
          <colgroup span="2"></colgroup>
          <colgroup></colgroup>
          <colgroup></colgroup>
          <colgroup></colgroup>
          <colgroup></colgroup>
          <colgroup></colgroup>
          <colgroup></colgroup>
          <colgroup></colgroup>
          <thead>
            <tr>
              <td>
                <b> Problem </b>
              </td>
              <td>
                <b> Instance </b>
              </td>
              <td>
                <b> Solver </b>
              </td>
              <td>
                <b> Status </b>
              </td>
              <td>
                <b> Time </b>
              </td>
              <td>
                <b> Objective </b>
              </td>
              <td>
                <b> Score </b>
              </td>
              <td className="score-incomplete">
                <b> Score Incomplete</b>
              </td>
              <td className="score-area">
                <b> Score Area</b>
              </td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <div id="plots-section" style={{ display: 'none' }}>
        <h3>Objective plots for each instance</h3>
        <table
          frame="box"
          border="2"
          rules="groups"
          cellpading="20"
          cellSpacing="20"
          name="objective_plots"
        >
          <colgroup span="2"></colgroup>
          <colgroup width="1200"></colgroup>
          <thead>
            <tr>
              <td>
                <b> Problem </b>
              </td>
              <td>
                <b> Instance </b>
              </td>
              <td>
                <b> Plot </b>
              </td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </>
  )
}
