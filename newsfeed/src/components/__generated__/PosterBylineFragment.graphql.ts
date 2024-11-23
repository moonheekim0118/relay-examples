/**
 * @generated SignedSource<<b46378c6dd51dfd41e4b81de3ad073f6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PosterBylineFragment$data = {
  readonly name: string | null;
  readonly profilePicture: {
    readonly " $fragmentSpreads": FragmentRefs<"ImageFragment">;
  } | null;
  readonly " $fragmentType": "PosterBylineFragment";
};
export type PosterBylineFragment$key = {
  readonly " $data"?: PosterBylineFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PosterBylineFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PosterBylineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "profilePicture",
      "plural": false,
      "selections": [
        {
          "args": [
            {
              "kind": "Literal",
              "name": "width",
              "value": 60
            }
          ],
          "kind": "FragmentSpread",
          "name": "ImageFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Actor",
  "abstractKey": "__isActor"
};

(node as any).hash = "8241bf48799a180d112be3d92929af46";

export default node;
