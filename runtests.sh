#!/bin/bash

# Run tests
echo "
        ===============================================
        =                                             =
        =                RUNNING TESTS                =
        =                                             =
        ===============================================
        "
npx playwright test

# Show HTML report
# npx playwright show-report

echo "
        ===============================================
        =                                             =
        =                TEST RUN COMPLETE            =
        =                                             =
        ===============================================
        "