import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerNewForm1 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NewForm1, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly username?: string | null;
  readonly email?: string | null;
  readonly address?: string | null;
  readonly phone?: string | null;
  readonly website?: string | null;
  readonly company?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNewForm1 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NewForm1, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly username?: string | null;
  readonly email?: string | null;
  readonly address?: string | null;
  readonly phone?: string | null;
  readonly website?: string | null;
  readonly company?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type NewForm1 = LazyLoading extends LazyLoadingDisabled ? EagerNewForm1 : LazyNewForm1

export declare const NewForm1: (new (init: ModelInit<NewForm1>) => NewForm1) & {
  copyOf(source: NewForm1, mutator: (draft: MutableModel<NewForm1>) => MutableModel<NewForm1> | void): NewForm1;
}

type EagerQueEs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<QueEs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQueEs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<QueEs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type QueEs = LazyLoading extends LazyLoadingDisabled ? EagerQueEs : LazyQueEs

export declare const QueEs: (new (init: ModelInit<QueEs>) => QueEs) & {
  copyOf(source: QueEs, mutator: (draft: MutableModel<QueEs>) => MutableModel<QueEs> | void): QueEs;
}