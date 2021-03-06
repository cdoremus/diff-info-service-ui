import React from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {setDiffReducer} from './reducers'
import {DiffInfoFormStore} from './types'
import DiffInputComponent from './components/DiffInput'
import DiffInfoComponent from "./components/DiffInfo";

const init: DiffInfoFormStore = {
    diffInputText: 'diff --git a/.gitignore b/.gitignore\n' +
        'index feb3e1f..5835ba8 100644\n' +
        '--- a/.gitignore\n' +
        '+++ b/.gitignore\n' +
        '@@ -2,6 +2,7 @@\n' +
        ' build\n' +
        ' out\n' +
        '\n' +
        '+.idea/\n' +
        ' *.iml\n' +
        ' *.ipr\n' +
        ' *.iws',
    diffInfo: {
        toFile: "",
        fromFile: "",
        fileStatus: "",
        addedFile: "",
        modifiedFile: "",
        removedFile: "",
        renamed: "",
        binary: "",
        mode: "",
        oldMode: "",
        checksumBefore: "",
        checksumAfter: "",
        copied: "",
        similarityIndex: "",
        disimilarityIndex: "",
        rawDiff: ""
    }
};

const store = createStore<DiffInfoFormStore, any, any, any>(setDiffReducer, init);

const App = () => (
    <Provider store={store}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-auto">
                    <h1>Diff Info</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <DiffInputComponent/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <DiffInfoComponent/>
                </div>
            </div>
        </div>
    </Provider>
);

export default App;
