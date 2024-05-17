<h1>LOAD test folders ( test 4,5,6 )</h1>
        <p>This repository contains three folders, each corresponding to a different test scenario. Each folder includes the following components:</p>
        <ul>
            <li><strong>Test Topology File:</strong> A file that describes the test topology.</li>
            <li><strong>Test Report:</strong> A report generated via Power BI summarizing the test results.</li>
            <li><strong>Python Test File:</strong> A Python script used with the Locust test tool to perform load testing.</li>
            <li><strong>Test Tool Report:</strong> A detailed report from the test tool.</li>
            <li><strong>Test terminal output :</strong> The raw output of the test run.</li>
        </ul>

<h2>Getting Started</h2>
        <p>To get started with the tests, follow these instructions:</p>

  <h3>Prerequisites</h3>
        <ul>
            <li>Python 3.x</li>
            <li>Locust (install using <code>pip install locust</code>)</li>
            <li>Power BI Desktop for viewing <code>.pbix</code> files</li>
        </ul>

 <h3>Running the Locust Tests</h3>
        <ol>
            <li>Navigate to the desired test scenario folder (e.g., <code>test4</code>).</li>
            <li>Run the Locust test using the following command:
                <pre><code>locust -f test.py</code></pre>
            </li>
            <li>Open a web browser and navigate to <code>http://localhost:8089</code> to start the load test and view real-time results.</li>
        </ol>

 <h3>Viewing the Reports</h3>
        <ul>
            <li><strong>Power BI Report:</strong> Open the <code>.pbix</code> file in Power BI Desktop to view the detailed test report.</li>
            <li><strong>Test terminal text file:</strong> file contains the raw output of the test run, which can be viewed in any text editor.</li>
            <li><strong>test final report PDF:</strong> a PDF file contains the power bi report in PDF format.</li>
           
       


<h1>made by : POULA GEORGE FOUAD</h1>
