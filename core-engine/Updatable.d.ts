/**
 * Module used to create and manage Updatables. Updatables provide the proper
 * way to manage objects that update their state every tick. Updatables may not 
 * be notified every tick, if there are too many, to avoid user interface 
 * freezes.
 */
declare namespace Updatable {
    /**
     * Adds object to updatables list.
     * @param obj object to be added to updatables list
     */
	function addUpdatable(obj: Updatable): any;

    /**
     * Adds object to updatables list, that ticks on client
     * thread and never saves.
     * @param obj object to be added to updatables list
     * @since 2.0.4b40
     */
    function addAnimator(obj: Updatable): any;

	/**
     * Adds object to updatables list.
     * @param obj object to be added to updatables list
     */
    function addLocalUpdatable(obj: Updatable): any;

    /**
     * @returns ArrayList instance containing all defined 
     * {@link Updatable} objects.
     */
    function getAll(): java.util.List<Updatable>;

    /**
     * @returns Current thread tick number.
     */
    function getSyncTime(): number;
}

/**
 * Updatable is an object that is notified every tick via it's 
 * {@link Updatable.update} method call.
 */
interface Updatable {
    /**
     * Called every tick.
     */
    update: () => void;
    /**
     * Once `true`, the object will be removed from updatables list and will no
     * longer receive update calls.
     */
    remove?: boolean; 
    /**
     * Any other user-defined properties.
     */
    [key: string]: any;
}

/**
 * @deprecated Use {@link Updatable} instead.
 */
declare const UpdatableAPI: typeof Updatable;
